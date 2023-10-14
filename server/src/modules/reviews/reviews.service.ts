import { Injectable } from '@nestjs/common';
import { Reviews } from './reviews.model';
import { CreateReviewDto } from './dto/reviews.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Reviews) private readonly reviewsModel: typeof Reviews,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Reviews> {
    createReviewDto.publicationDate = new Date();
    return this.reviewsModel.create(createReviewDto as any);
  }
}
