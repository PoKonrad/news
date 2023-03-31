import ArticleDialog from '../components/ArticleDialog';
import Header from '../components/Header/Header';
import InfoDialog from '../components/InfoDialog';
import Main from '../components/Main/Main';
import SideMenu from '../components/SideMenu/SideMenu';

const Index = () => {
  return (
    <div>
      <Header />
      <SideMenu />
      <Main />
      <InfoDialog />
      <ArticleDialog />
    </div>
  );
};

export default Index;
