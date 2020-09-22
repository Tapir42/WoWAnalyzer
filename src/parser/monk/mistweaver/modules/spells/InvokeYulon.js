import React from 'react';
import SPELLS from 'common/SPELLS';

import Analyzer, { SELECTED_PLAYER, SELECTED_PLAYER_PET } from 'parser/core/Analyzer';
import Events from 'parser/core/Events';

import SpellIcon from 'common/SpellIcon';
import StatisticBox, { STATISTIC_ORDER } from 'interface/others/StatisticBox';

import { formatNumber } from 'common/format';
import { TooltipElement } from 'common/Tooltip';

class InvokeYulon extends Analyzer {
  petID = null;
  soothHealing = 0;
  envelopHealing = 0;
  healing = 0;

  constructor(...args) {
    super(...args);
    this.active = !this.selectedCombatant.hasTalent(SPELLS.INVOKE_CHIJI_THE_RED_CRANE_TALENT.id);
    this.addEventListener(
      Events.heal.by(SELECTED_PLAYER).spell(SPELLS.ENVELOPING_BREATH),
      this.handleEnvelopingBreath,
    );
    this.addEventListener(
      Events.heal.by(SELECTED_PLAYER_PET).spell(SPELLS.SOOTHING_BREATH),
      this.handleSoothingBreath,
    );
    this.addEventListener(Events.summon.by(SELECTED_PLAYER).spell(SPELLS.INVOKE_YULON_THE_JADE_SERPENT), this.handleSummon);
  }

  handleSummon(event) {
    this.petID = event.targetID;
  }

  handleEnvelopingBreath(event) {
    this.envelopHealing += (event.amount || 0) + (event.absorbed || 0);
  }

  handleSoothingBreath(event) {
    this.soothHealing += (event.amount || 0) + (event.absorbed || 0);
  }

  statistic() {
    return (
      <>
        <StatisticBox
          position={STATISTIC_ORDER.OPTIONAL(50)}
          icon={<SpellIcon id={SPELLS.INVOKE_YULON_THE_JADE_SERPENT.id} />}
          value={`${formatNumber(this.soothHealing + this.envelopHealing)}`}
          label={
            <TooltipElement
              content={
                <>
                  Healing Breakdown:
                  <ul>
                    <li>{formatNumber(this.soothHealing)} healing from Soothing Breath.</li>
                    <li>{formatNumber(this.envelopHealing)} healing from Enveloping Breath.</li>
                  </ul>
                </>
              }
            >
              Total Healing Contributed
            </TooltipElement>
          }
        />
      </>
    );
  }
}

export default InvokeYulon;
