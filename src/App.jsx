import { Navigate, Route, Routes } from "react-router-dom";
import NotesList from "./pages/NotesList/NotesList";
import { NoteProvider } from "./contexts/NoteContext";
import { TagProvider } from "./contexts/TagContext";
import AddNote from "./pages/AddNote/AddNote";
import TagsManager from "./pages/TagsManager/TagsManager";
import ViewNote from "./pages/ViewNote/ViewNote";
import UpdateNote from "./pages/UpdateNote/UpdateNote";
import Navigation from "./components/Navigation/Navigation";
import NoteLayout from "./layouts/NoteLayout";
import PageLayout from "./layouts/PageLayout";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NoteProvider>
        <TagProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <PageLayout>
              <Routes>
                <Route path="/" element={<NotesList />} />
                <Route path="/create" element={<AddNote />} />
                <Route path="/tags" element={<TagsManager />} />
                <Route path="/:id" element={<NoteLayout />}>
                  <Route index element={<ViewNote />} />
                  <Route path="update" element={<UpdateNote />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </PageLayout>
            <Footer />
          </div>
        </TagProvider>
      </NoteProvider>
    </>
  );
}

export default App;
