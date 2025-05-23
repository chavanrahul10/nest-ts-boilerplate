import { Injectable } from "@nestjs/common";
import * as os from "os";

@Injectable()
export class HealthService {
  checkHealth() {
    return {
      status: "ok",
      pid: process.pid,
      hostname: os.hostname(),
    };
  }
}
