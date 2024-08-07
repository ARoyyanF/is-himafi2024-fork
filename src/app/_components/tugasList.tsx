"use client"

import { useState } from "react";
import { api } from "~/trpc/react";
import { FormEvent } from "react";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";

import Image from 'next/image'
import { url } from "inspector";
import { Url } from "next/dist/shared/lib/router/router";

export function TugasList() {
    const { data: tugass, refetch: refetchTugass } = api.tugasAdmin.getAll.useQuery();
    const createSubmission = api.submitPeserta.submitPesertaCreate.useMutation();
    return (
    <div>
        <h1>Tugas:</h1>
        <button
            onClick={() => refetchTugass()}
        >
            Refetch 
        </button>
        <ul className="grid gap-4 grid-cols-1">
            {tugass?.map((tugas) => (
                <li key={tugas.id} >
                    <p><b>{tugas.judul}</b></p>
                    <p>{tugas.body}</p>
                    <Link
                        href={tugas.attachment ? tugas.attachment : '#'}
                        >attachments
                    </Link>
                    <p>deadline: {tugas.deadline?.toString()}</p>
                </li>
            ))}
        </ul>
        
    </div>
    )
}

// export function TugasListAdmin() {

// }

export function TugasListPeserta() {
    const { data: tugass, refetch: refetchTugass } = api.tugasAdmin.getAll.useQuery();
    const { data: tugasSubmits, refetch: refetchTugasSubmits } = api.submitPeserta.getAll.useQuery();
    const createSubmission = api.submitPeserta.submitPesertaCreate.useMutation();
    const hideSubmission = api.submitPeserta.hideSubmission.useMutation();

    // sort tugas by date
    if (tugass){
        tugass.sort((a,b)=>{
            // const dateA = new Date(b.updatedAt)
            // const dateB = new Date(a.updatedAt);
            // if (isNaN(dateA) || isNaN(dateB)) {
            //     // Handle invalid date strings
            //     return 0;
            //   }
            // return dateB - dateA;
            return new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf();
        })
    }
    

    async function hideTugas (tugasId: string) {
        await hideSubmission.mutateAsync({ tugasId: tugasId})
        void refetchTugasSubmits()
    }
    
    return (
    <div className="m-0 sm:m-5 bg-local bg-repeat-y"
        style={{
                backgroundImage: `url('/wooden board.png')`,
                backgroundSize: "100% "
            }}>
        <div className="p-0 sm:p-6 md:p-20">
            <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  items-start" >
                {tugass?.map((tugas) => (
                    <li key={tugas.id} className="bg-local relative"
                        style={{
                            backgroundImage: `url('/paper1.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%"
                        }}
                        >
                        {tugas.isTugasSpesial && <Image className="opacity-30 absolute right-0 left-0 bottom-0 top-0 m-auto" src="/logo-himafi-old-stamp.png" alt="" width={400} height={400} ></Image>}
                        <div className="m-[4rem] sm:m-[7rem] text-amber-900 font-bold text-center z-10 relative">
                            <h1 className="text-[2rem] font-extrabold tracking-tight">{tugas.judul}</h1>
                            <p className="font-black ">Deadline: {tugas.deadline?.toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <p className="text-justify">{tugas.body}</p>
                            <div className="pt-4"> {tugas.attachment &&
                                <Link className="bg-amber-900/100 text-orange-200 rounded px-10 py-3 font-semibold no-underline transition hover:bg-amber-900/70"
                                    href={tugas.attachment ? tugas.attachment : '#'}
                                    >attachment
                                </Link>
                            }</div>
                            <p className="pt-8 text-[1.2rem]">Upload</p>
                            <UploadButton 
                                className="ut-button:bg-amber-900/100 ut-label:'ese'"
                                endpoint="blobUploaderLarge"
                                onClientUploadComplete={async (res) => {
                                    console.log("Files: ", res[0]!.url);
                                    await createSubmission.mutateAsync({ tugasId: tugas.id, url: res[0]!.url, filename: res[0]!.name });
                                    void refetchTugasSubmits()
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                            <div>
                                {tugasSubmits?.map((submission) => (
                                    submission.submissionTugasId === tugas.id && (
                                        <div className="flex justify-between px-10" key={submission.id}>
                                            <Link href={submission.submissionUrl as Url}>{submission.filename? submission.filename : 'file'}</Link>
                                            <button onClick={() => hideTugas(submission.id)}>Delete</button>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}