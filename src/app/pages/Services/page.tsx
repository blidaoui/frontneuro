"use client";

import { useState } from "react";
import Services from "@/app/components/Services";
import { Service } from "@/app/components/types";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Services
      selectedService={selectedService}
      setSelectedService={setSelectedService}
    />
  );
}