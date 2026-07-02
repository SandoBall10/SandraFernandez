import { CAMPAIGN_PLAN_DOCUMENTS, downloadCampaignPlan } from './campaignPlans';

export const PLAN_GOBierno_FILE_NAME = CAMPAIGN_PLAN_DOCUMENTS[0].fileName;

/** @deprecated Usar downloadCampaignPlan desde campaignPlans */
export function downloadPlanGobierno(): void {
  downloadCampaignPlan(CAMPAIGN_PLAN_DOCUMENTS[0]);
}
