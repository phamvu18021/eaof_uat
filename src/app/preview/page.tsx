"use client";

import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";

const DraftPosts = nextDynamic(
  () => import("@/features/draft-post").then((mod) => mod.DraftPosts),
  { loading: () => <Loading /> }
);

export default function Page() {
  return <DraftPosts />;
}
