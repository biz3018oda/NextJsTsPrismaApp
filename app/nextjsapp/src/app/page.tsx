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


export default function HomePage() {
  return (
    <ApplicationContainer>
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
