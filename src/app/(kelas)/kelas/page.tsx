import React from "react";

import Container from "@/components/layout/container";

import KehadiranSectionPanitia from "./_components/event/kehadiran-section-panitia";
import KehadiranSection from "./_components/event/peserta/kehadiran-section";
import PapanInformasiSection from "./_components/informasi/papan-informasi-section";
import TugasSectionPanitia from "./_components/tugas/panitia/tugas-section-panitia";
import TugasSectionPeserta from "./_components/tugas/peserta/tugas-section-peserta";
import UserInfo from "./_components/user-info";
import ViewAs from "./_components/view-as";

export default async function KelasPage() {
  return (
    <Container className="py-12">
      <section className="flex flex-col flex-wrap md:flex-row gap-y-8 gap-x-12 justify-between items-start mb-12">
        <div>
          <p className="before:md:drop-shadow-glow text-accent font-black tracking-tight text-[2.7rem] leading-[1] xs:text-5xl sm:text-6xl lg:text-7xl before:content-['Ruang_Kelas'] before:absolute before:ml-[2px] before:mt-[2px] before:sm:ml-1 before:sm:mt-1 before:text-foreground">
            Ruang Kelas
          </p>
        </div>

        <UserInfo />
      </section>

      <ViewAs
        kehadiranPanitia={<KehadiranSectionPanitia />}
        kehadiranPeserta={<KehadiranSection />}
        papanInformasi={<PapanInformasiSection />}
        tugasPanitia={<TugasSectionPanitia />}
        tugasPeserta={<TugasSectionPeserta />}
      />
    </Container>
  );
}
