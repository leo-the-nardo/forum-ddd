import { IQuestionsRepository } from '../repositories/question-repository'
import { IAnswersRepository } from '../repositories/answer-repository'

interface DefineBestAnswerUseCaseInputDto {
  answerId: string
  authorId: string
}

export class DefineBestAnswerUseCase {
  constructor(
    private questionsRepository: IQuestionsRepository,
    private answersRepository: IAnswersRepository,
  ) {}

  async execute(input: DefineBestAnswerUseCaseInputDto): Promise<void> {
    const answer = await this.answersRepository.findById(input.answerId)
    if (!answer) throw new Error('Answer not found')

    const question = await this.questionsRepository.findById(answer.questionId)
    if (!question) throw new Error('Question not found')

    if (input.authorId !== question.authorId.value)
      throw new Error('Not allowed')

    question.defineBestAnswer(input.answerId)

    await this.questionsRepository.save(question)
  }
}
