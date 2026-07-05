/**
 * LED savings model shared by the service and project detail calculators.
 *
 * Estimates the annual energy and dollar savings of swapping halogen
 * downlights for LEDs, based on a fixed usage/tariff assumption.
 */

/** Assumed average hours each downlight runs per day. */
export const LED_HOURS_PER_DAY = 5;

/** Assumed electricity tariff in dollars per kWh. */
export const LED_COST_PER_KWH = 0.36;

export interface LedSavings {
  /** Energy saved per year, in kWh. */
  kwh: number;
  /** Money saved per year, in dollars. */
  cost: number;
}

export function ledSavings(oldWatts: number, newWatts: number, count: number): LedSavings {
  const wattsSaved = Math.max(0, oldWatts - newWatts) * count;
  const kwh = (wattsSaved * LED_HOURS_PER_DAY * 365) / 1000;
  return { kwh, cost: kwh * LED_COST_PER_KWH };
}
