import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HeaderComponent } from '../components/common/header/HeaderComponent';
import { ClassDetailTitle } from '../components/classDetail/ClassDetailTitle';
import { ClassDetailNavigation } from '../components/classDetail/ClassDetailNavigation';
import { ClassApplicationModal } from '../components/classDetail/ClassApplicationModal';

const PageContainer = styled.div`
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function ClassDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeaderComponent />
      <PageContainer>
        <ClassDetailTitle />
      </PageContainer>
      <ClassDetailNavigation openModal={openModal} />

      {isModalOpen && <ClassApplicationModal closeModal={closeModal} />}
    </div>
  );
}
