import { RateLimiter } from './RateLimiter';
import { TokenValidator } from './TokenValidator';
import { IPBlocker } from './IPBlocker';
import { SecurityConfig } from './types';
import { Logger } from '../utils/logger';

export class SecurityManager {
    private rateLimiter: RateLimiter;
    private tokenValidator: TokenValidator;
    private ipBlocker: IPBlocker;
    private logger: Logger;

    constructor(config: SecurityConfig) {
        this.rateLimiter = new RateLimiter(config.rateLimit);
        this.tokenValidator = new TokenValidator(config.jwt);
        this.ipBlocker = new IPBlocker(config.ipBlock);
        this.logger = new Logger('SecurityManager');
    }

    async validateRequest(req: Request): Promise<boolean> {
        try {
            // Check IP block
            if (await this.ipBlocker.isBlocked(req.ip)) {
                throw new Error('IP blocked');
            }

            // Check rate limit
            if (await this.rateLimiter.isLimited(req.ip)) {
                throw new Error('Rate limit exceeded');
            }

            // Validate token
            const token = this.extractToken(req);
            await this.tokenValidator.validate(token);

            return true;
        } catch (error) {
            this.logger.error('Security validation failed:', error);
            return false;
        }
    }

    private extractToken(req: Request): string {
        // Token extraction implementation
        return '';
    }
} 