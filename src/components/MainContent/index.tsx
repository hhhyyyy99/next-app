import React from 'react';

const MainContent = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="md:p-4">
      <section className="container mx-auto flex justify-center">
        {children}
      </section>
    </main>
  );
};

export default MainContent;
