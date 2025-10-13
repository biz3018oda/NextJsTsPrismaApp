"use client";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import ApplicationContainer from '@/components/layouts/ApplicationContainer';
import Main from "@/components/layouts/main/Main";


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
      <Main />
    </ApplicationContainer>
  );
}
