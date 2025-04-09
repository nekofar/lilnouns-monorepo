import { FeedbackSent } from './types/LilNounsData/LilNounsData';
import { getOrCreateDelegate, getOrCreateProposalFeedback } from './utils/helpers';

export function handleFeedbackSent(event: FeedbackSent): void {
  const id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString());
  const feedback = getOrCreateProposalFeedback(id);
  const delegate = getOrCreateDelegate(event.params.msgSender.toHexString());

  feedback.createdTimestamp = event.block.timestamp;
  feedback.createdBlock = event.block.number;
  feedback.proposal = event.params.proposalId.toString();
  feedback.voter = delegate.id;
  feedback.supportDetailed = event.params.support;
  feedback.votes = delegate.delegatedVotes;
  feedback.reason = event.params.reason;

  feedback.save();
}
