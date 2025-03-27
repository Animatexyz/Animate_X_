import React from 'react';
import styled from 'styled-components';
import { Animation } from '../../types';
import { Button } from '@animatex/ui';

interface Props {
    animation: Animation;
    onPlay: () => void;
    onShare: () => void;
}

const Card = styled.div`
    border-radius: 12px;
    padding: 16px;
    background: ${props => props.theme.colors.background};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Preview = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
`;

export const AnimationCard: React.FC<Props> = ({ animation, onPlay, onShare }) => {
    return (
        <Card>
            <Preview>
                <img src={animation.previewUrl} alt={animation.title} />
            </Preview>
            <h3>{animation.title}</h3>
            <p>{animation.description}</p>
            <Button onClick={onPlay}>Play</Button>
            <Button variant="secondary" onClick={onShare}>Share</Button>
        </Card>
    );
}; 