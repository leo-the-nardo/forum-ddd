import { PaginationParams } from '../../../../core/repositories/pagination-params'
import { Question } from '../../enterprise/entities/question.entity'

export interface IQuestionsRepository {
  create(question: Question): Promise<void>
  findById(id: string): Promise<Question | null>
  findManyRecent(params: PaginationParams): Promise<Question[]>
  findBySlug(slug: string): Promise<Question | null>
  delete(question: Question): Promise<void>
  save(question: Question): Promise<void>
}
