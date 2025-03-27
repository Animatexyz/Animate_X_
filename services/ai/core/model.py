import torch
import torch.nn as nn

class AnimationGenerator(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.encoder = self._build_encoder()
        self.decoder = self._build_decoder()
        self.motion_predictor = self._build_motion_predictor()

    def _build_encoder(self):
        return nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=7, stride=2, padding=3),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 128, kernel_size=3, stride=2, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True)
        )

    def forward(self, x):
        features = self.encoder(x)
        motion = self.motion_predictor(features)
        return self.decoder(motion) 