import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ShowTabs from './components/ShowTabs';
import ShowContent from './components/ShowContent';
import $ from 'jquery';
function App() {
  const [tabsLest, setTabsLest] = useState(["hello", "it is my first try to do navbar", "thank you"]);
  const [content, setContent] = useState(tabsLest[0])
  const renderContent = (index) => {

    setContent(tabsLest[index])
    $("p").css("display", "none")
    $("p").slideDown("slow")


  }




  return (
    <div className="App">
      <ShowTabs lest={tabsLest} renderContent={renderContent} />
      <ShowContent content={content} />
    </div>
  );
}

export default App;
