import { Module } from '@nestjs/common';
import { EnergyApi247Facade } from './energy-api.facade';
import { NotaryModule } from './notary/notary.module';
import { ProofRequestModule } from './proof-request/proof-request.module';

@Module({
    imports: [ProofRequestModule, NotaryModule],
    providers: [EnergyApi247Facade],
    exports: [EnergyApi247Facade]
})
export class EnergyApi247Module {}
