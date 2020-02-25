export type CandidateAssessments = {
  // Personal Profile Analysis
  ppa?: {
    sent_dt?: string,
    complete_dt?: string,
    result?: string
  }
  // General Intelligence Assessment
  gia?: {
    sent_dt?: string,
    complete_dt?: string,
    result?: string
  }
  // Trait Emotional Intelligence Questionnaire
  teique?: {
    sent_dt?: string,
    complete_dt?: string,
    result?: string
  }
  // High Potential Trait Indicator
  hpti?: {
    sent_dt?: string,
    complete_dt?: string,
    result?: string
  }
}

export type CandidateData = {
  id: number,
  name: string,
  assessments: CandidateAssessments;
}

export type CandidateDataList = CandidateData[]