import { GlobalPushUpConfirmRef } from "@/components/Global/PushUp";
import React from "react";

class PushUpService {
  static instance: React.MutableRefObject<GlobalPushUpConfirmRef>;
}

export default PushUpService;
