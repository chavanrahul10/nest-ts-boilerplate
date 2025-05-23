import { Test, TestingModule } from "@nestjs/testing";
import { HealthController } from "../../src/health/health.controller";
import { HealthService } from "../../src/health/health.service";

describe("HealthController", () => {
  let controller: HealthController;
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: {
            checkHealth: jest.fn().mockReturnValue({ status: "ok" }),
          },
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
    service = module.get<HealthService>(HealthService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return health status", async () => {
    const result = { status: "ok" };

    // No need to mock implementation again as it's already done in the provider setup
    expect(await controller.checkHealth()).toEqual(result);
    expect(service.checkHealth).toHaveBeenCalled();
  });
});
