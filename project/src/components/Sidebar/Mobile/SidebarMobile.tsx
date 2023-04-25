import { useState } from 'react';
import Text from 'src/styles/typography';
import SectionFilter from './style';
import { DivHeader } from 'src/components/Header/style';
import { IoCloseSharp } from 'react-icons/io5';
import Sidebar from '../Sidebar';

const SideBarMobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <DivHeader mobileOpen={mobileOpen} className='header-container'>
        <SectionFilter>
          <Text>Tipo</Text>
          <Text>Cor</Text>
          <button
            onClick={() =>
              mobileOpen ? setMobileOpen(false) : setMobileOpen(true)
            }
          >
            <Text>Filtro</Text>
            <IoCloseSharp />
          </button>
          <Sidebar />
        </SectionFilter>
      </DivHeader>
    </>
  );
};

export default SideBarMobile;
