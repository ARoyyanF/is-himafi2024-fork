/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from "next/link";
import { PerizinanInput, PerizinanStatus } from "./perizinan";
import { KondisiPraDayInput } from "./kondisi-massa";
import { HadirAktualStatus, KehadiranInput } from "./kehadiran-aktual";
import { api } from "~/trpc/server";
export async function News() {
  const news: any = (await api.sheetsCMS.extractNews())[0];

  return (
    <div
      className="font-roman flex w-[100vw] flex-col bg-local px-10 py-20 font-bold text-amber-900 md:w-[90vw] md:px-28"
      style={{
        backgroundImage: `url('/news-paper.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <h1 className="font-bluecashews pb-10 pt-10 text-center text-3xl font-extrabold tracking-widest md:text-6xl">{news.nameplate}</h1>
      <div className="flex flex-col justify-between gap-20 pb-4 text-justify lg:flex-row">
        <div>
          <p className="font-bluecashews pb-2 text-center text-2xl font-black">{news.headline}</p>
          <p className="first-letter:float-left first-letter:text-[5rem] first-letter:font-black first-letter:uppercase first-letter:leading-[4.5rem]">
            {news.body}
          </p>
          <div className="py-3">
            <Link
              href="https://www.youtube.com/watch?v=WXBA4eWskrc&pp=ygUXcGhpbG9zb3BoeSBvZiB0aW1lIHRlZHg%3D"
              className="flex flex-row justify-center rounded-lg bg-red-700 px-10 py-2 font-semibold text-white no-underline transition hover:bg-red-600"
            >
              The Philosophy of Time Management
            </Link>
          </div>
          <p className="pb-5 pt-2 text-center font-sans font-bold">{news.instruksi}</p>
          <div className="flex flex-row justify-center gap-10">
            <Link
              href={news.bukuUngu}
              className="rounded-full bg-violet-800 px-10 py-3 font-semibold text-white no-underline transition hover:bg-violet-700"
            >
              Buku ungu
            </Link>
            <Link
              href={news.bukuMerah}
              className="rounded-full bg-red-700 px-10 py-3 font-semibold text-white no-underline transition hover:bg-red-600"
            >
              Buku merah
            </Link>
          </div>
        </div>
        <div>
          <p className="pb-2 text-center text-2xl font-black">post panitia</p>
          <p className="first-letter:float-left first-letter:text-[5rem] first-letter:font-black first-letter:uppercase first-letter:leading-[4.5rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <PerizinanStatus />
          <PerizinanInput />
          <KondisiPraDayInput />
          <KehadiranInput />
          <HadirAktualStatus />
        </div>
      </div>
      {
        //Recheck-day form is unused at day 0
        /* <div className="flex flex-col justify-center items-center mt-10">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSci9nK1b70C5Ju7AcoxrCYQ_R8Lngc7JgbhZYuau4nHQLa9TQ/formResponse">
                    <button className="text-center inline-block rounded-full bg-black/90 px-10 py-3 no-underline transition hover:bg-black/60 text-white text-center font-bluecashews">
                        Form Konfirmasi Kehadiran
                    </button>
                </a>
                <p className="text-center font-black font-roman pt-2">
                    Form ini wajib diisi oleh seluruh peserta pada saat Day. Bagi yang belum mengisi, silakan mengisi form.
                </p>
            </div> */
      }
    </div>
  );
}
