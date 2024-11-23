import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const BootSequence: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#39ff14] p-8 font-mono">
      <div className="boot-sequence space-y-1 text-sm">
        <TypeAnimation
          sequence={[
            `[    0.000000] Linux version 6.5.0-portfolio
[    0.000151] Command line: BOOT_IMAGE=/boot/portfolio-os root=UUID=portfolio
[    0.052025] Initializing system...
[    0.104191] CPU0: Intel(R) Portfolio(TM) CPU @ 3.40GHz
[    0.156734] Memory: 16384MB available
[    0.208851] Loading kernel modules...
[    0.260973] Mounting root filesystem...
[    0.312845] Starting system services
[    0.364961] Starting network interfaces...
[    0.416833] eth0: Link is up at 1000 Mbps
[    0.468955] Loading security modules...
[    0.520841] Initializing firewall...
[    0.572963] Starting portfolio services...
[    0.624855] Loading user interface...
[    0.676947] Starting X server...
[    0.728839] Initializing window manager...
[    0.780955] System initialization complete.
[    0.832844] CATS Protocol: All your base are belong to us
[    0.884966] Time Circuit: Flux capacitor fluxing
[    0.936858] Power Level: 1.21 gigawatts
[    0.988970] Cyberdeck Status: Online
[    1.040862] Neural Interface: Connected
[    1.092974] Global Status: HACK THE PLANET!

[    1.140862] Kernel panic - not syncing: Previous shutdown caused by rm -rf
[    1.192974] CPU: 0 PID: 1 Comm: portfolio-os Not tainted
[    1.244862] Hardware name: Portfolio Industries
[    1.296974] Call Trace:
[    1.348862]  dump_stack_lvl+0x1a/0x2c
[    1.400974]  panic+0x10c/0x2c8
[    1.452862]  kernel_init+0x11/0x120
[    1.504974]  ret_from_fork+0x22/0x30
[    1.556862] ---[ end Kernel panic - not syncing: Previous shutdown caused by rm -rf ]---

Rebooting in 5 seconds...

Portfolio OS 6.5.0 (console)
login: guest
Password: ********

Welcome, type help for all options`,
            1000,
          ]}
          wrapper="pre"
          cursor={true}
          className="text-sm leading-5"
          speed={99}
        />
      </div>
    </div>
  );
};