"use client";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import ApplicationContainer from '@/components/layouts/ApplicationContainer';
import PublicRelationsSection from "@/components/layouts/main/PublicRelationsSection";
import CollectionSection from '@/components/layouts/main/CollectionSection'
import NewItemsSection from "@/components/layouts/main/NewItemsSection";
import NewsSection from "@/components/layouts/main/NewsSection";
import ServiceSection from "@/components/layouts/main/ServiceSection";
import PeopleSection from "@/components/layouts/main/PeopleSection";


export default function HomePage() {
  const number = "30305637";
  const api = "/api/users";
  const apiUrl = `${api}?number=${number}`;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error("ユーザー取得に失敗しました");
        }

        const data: User = await res.json();
        setUser(data);
      } catch (error) {
        console.error("ユーザー情報の取得エラー:", error);
        setUser(null); // 失敗時は null
      }
    };

    fetchUser();
  }, []);

  return (
    <ApplicationContainer user={user}>
      {/* mainコンテンツ */}
      <PublicRelationsSection />
      <CollectionSection />
      <NewItemsSection />
      <NewsSection />
      <ServiceSection />
      <PeopleSection />
    </ApplicationContainer>
  );
}
