"use client";

import React from "react";

import { DataTable } from "@/components/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { Submission, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

import { columns } from "./submission-peserta-column";

async function getTugasSubmission(tugasId: number) {
  const res = await fetch(`/api/submissions/all-users/${tugasId.toString()}`);
  const data = await res.json();

  return data;
}

interface TugasSubmissionDetailProps extends Submission {
  user: User;
  tugas: {
    dueDate: Date;
  };
}

export default function TugasSubmissionDetail({
  tugasId,
}: {
  tugasId: number;
}) {
  const submission = useQuery<TugasSubmissionDetailProps[], Error>({
    queryKey: ["tugasSubmission", { id: tugasId }],
    queryFn: () => getTugasSubmission(tugasId),
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  });

  // if (submission.status === "loading") return <div>Loading...</div>;
  // if (submission.status === "error") return <div>Error...</div>;

  return (
    <>
      {submission.status === "loading" && (
        <>
          <div className="mt-12 w-full flex gap-x-12 flex-row items-center justify-between">
            <Skeleton className="w-full md:w-1/2 h-8" />
            <Skeleton className="w-full md:w-[300px] h-8" />
          </div>
          <Skeleton className="mt-8 w-full h-96" />
        </>
      )}

      {submission.status === "error" && (
        <div>Error {submission.error.message}</div>
      )}

      {submission.status === "success" && (
        <DataTable
          fetching={submission.isFetching}
          lastFetchTime={submission.dataUpdatedAt}
          columns={columns}
          tugasId={tugasId}
          data={submission.data}
        />
      )}
    </>
  );
}
