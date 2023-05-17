import { Answer } from '../../enterprise/entities/answer.entity'

export interface IAnswersRepository {
  create(answer: Answer): Promise<void>
  findById(id: string): Promise<Answer | null>
  delete(answer: Answer): Promise<void>
}
