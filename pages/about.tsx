import { getPageContent } from '@/lib/api';

import PageTop from '@/components/layout/page-top';
import Container from '@/components/layout/container';

export default function About({ pageData }) {
  return (
    <Container title={pageData.pageTitle} type="page">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <PageTop
          title={pageData.pageTitle}
          subtitle=""
          pictureUrl={pageData.pagePicture}
          text={pageData.pageText}
        />
      </div>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await getPageContent(locale, 'about');
  return {
    props: {
      pageData,
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}
