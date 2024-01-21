import { Test, TestingModule } from '@nestjs/testing';
import { MatrizResolver } from './matriz.resolver';

describe('MatrizResolver', () => {
  let resolver: MatrizResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatrizResolver],
    }).compile();

    resolver = module.get<MatrizResolver>(MatrizResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
