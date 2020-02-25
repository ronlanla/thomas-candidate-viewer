import classnames from 'classnames';
import React, { Component } from 'react';

import { Assessment, CandidateAssessments } from '../../../../../types/components/candidate-view/candidate-view';
import Icon from '../../../../global/icon';

import './candidate-card.css';

interface CandidateCardProps {
  assessments: CandidateAssessments;
}

class CandidateCard extends Component<CandidateCardProps> {
  render () {
    const { ppa, gia, teique, hpti } = this.props.assessments;

    const hasFinishDate = (assessment?: Assessment) => Boolean(assessment && assessment.complete_dt);

    return (
      <span className={'CandidateCard'}>
        <Icon name="Behaviour" class={classnames('CandidateCard_Icon', hasFinishDate(ppa) && 'CandidateCard_Icon-Behaviour')}/>
        <Icon name="Aptitude" class={classnames('CandidateCard_Icon', hasFinishDate(gia) && 'CandidateCard_Icon-Aptitude')}/>
        <Icon name="Emotion" class={classnames('CandidateCard_Icon', hasFinishDate(teique) && 'CandidateCard_Icon-Emotion')}/>
        <Icon name="Personality" class={classnames('CandidateCard_Icon', hasFinishDate(hpti) && 'CandidateCard_Icon-Personality')}/>
      </span>
    );
  }
}

export default CandidateCard;