import { CronJob } from 'cron';
import { SchedulerConfig, Task } from './types';
import { Logger } from '../utils/logger';

export class TaskScheduler {
    private jobs: Map<string, CronJob>;
    private logger: Logger;

    constructor(config: SchedulerConfig) {
        this.jobs = new Map();
        this.logger = new Logger('TaskScheduler');

        this.initializeScheduledTasks(config.tasks);
    }

    private initializeScheduledTasks(tasks: Task[]): void {
        tasks.forEach(task => {
            this.scheduleTask(task);
        });
    }

    private scheduleTask(task: Task): void {
        try {
            const job = new CronJob(
                task.schedule,
                async () => {
                    try {
                        await task.handler();
                    } catch (error) {
                        this.logger.error(
                            `Task execution failed: ${task.name}`,
                            error
                        );
                    }
                },
                null,
                true
            );

            this.jobs.set(task.name, job);
            this.logger.info(`Scheduled task: ${task.name}`);
        } catch (error) {
            this.logger.error(
                `Failed to schedule task: ${task.name}`,
                error
            );
        }
    }

    addTask(task: Task): void {
        this.scheduleTask(task);
    }

    removeTask(taskName: string): void {
        const job = this.jobs.get(taskName);
        if (job) {
            job.stop();
            this.jobs.delete(taskName);
            this.logger.info(`Removed task: ${taskName}`);
        }
    }

    stopAll(): void {
        this.jobs.forEach((job, taskName) => {
            job.stop();
            this.logger.info(`Stopped task: ${taskName}`);
        });
        this.jobs.clear();
    }
} 