export type CandidateData = {
  id: number,
  name: string,
  assessments: {
    // Personal Profile Analysis
    ppa: {
      sent_dt?: string,
      complete_dt?: string,
      result?: string
    }
  }
}

export type CandidateDataList = CandidateData[]