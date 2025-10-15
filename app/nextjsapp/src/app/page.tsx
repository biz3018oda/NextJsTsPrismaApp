"use client";
// クライアントコンポーネント
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import ApplicationContainer from '@/components/layouts/ApplicationContainer';
import PublicRelationsSection from "@/components/layouts/main/PublicRelationsSection";
import CollectionSection from '@/components/layouts/main/CollectionSection'
import NewItemsSection from "@/components/layouts/main/NewItemsSection";
import NewsSection from "@/components/layouts/main/NewsSection";
import ServiceSection from "@/components/layouts/main/ServiceSection";
import PeopleSection from "@/components/layouts/main/PeopleSection";
import { useEffect, useState } from "react";

type User = {
  id: string;
  number: string;
  familyname: string;
  firstname: string;
  email: string;
  img: string;
};

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
  fetch("/api/users?number=76774716")
    .then((res) => res.json())
    .then((data) => {
      console.log("取得したユーザー一覧:", data); // ←ここで出力
      setUsers([data]);
    });
}, []);

  return (
    <ApplicationContainer>
      {users.map((user) => (
          <li key={user.id}>
            {user.number}
          </li>
      ))}
      {/* mainコンテンツ */}
      <ThemeProvider theme={theme}>
        <PublicRelationsSection />
        <CollectionSection />
        <NewItemsSection />
        <NewsSection />
        <ServiceSection />
        <PeopleSection />
      </ThemeProvider>
    </ApplicationContainer>
  );
}
