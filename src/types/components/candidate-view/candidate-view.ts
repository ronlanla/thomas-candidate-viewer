export type Assessment = {
  sent_dt?: string,
  complete_dt?: string,
  result?: string
}

export type CandidateAssessments = {
  // Personal Profile Analysis
  ppa?: Assessment;
  // General Intelligence Assessment
  gia?: Assessment;
  // Trait Emotional Intelligence Questionnaire
  teique?: Assessment;
  // High Potential Trait Indicator
  hpti?: Assessment;
}

export type CandidateData = {
  id: number,
  name: string,
  assessments: CandidateAssessments;
}

export type CandidateDataList = CandidateData[]