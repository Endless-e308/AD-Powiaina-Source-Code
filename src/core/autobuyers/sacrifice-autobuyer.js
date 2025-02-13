import { AutobuyerState } from "./autobuyer";

export class SacrificeAutobuyerState extends AutobuyerState {
  get data() {
    return player.auto.sacrifice;
  }

  get name() {
    return `Dimensional Sacrifice`;
  }

  get isUnlocked() {
    return EternityMilestone.autoIC.isReached || InfinityChallenge(2).isCompleted;
  }

  get multiplier() {
    return this.data.multiplier;
  }

  set multiplier(value) {
    this.data.multiplier = value;
  }

  get bulk() {
    return 0;
  }

  get hasInput() {
    return true;
  }

  get inputType() {
    return "powiainaNum";
  }

  get inputEntry() {
    return "multiplier";
  }

  tick() {
    // eslint-disable-next-line max-len
    if (Achievement(118).canBeApplied || Sacrifice.nextBoost.gte(PowiainaNum.max(this.multiplier, 1.01))) sacrificeReset();
  }
}
