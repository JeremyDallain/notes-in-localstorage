import { Link } from "react-router-dom";
import { Tag } from "../../../components/Tag/Tag";


const NoteCard = ({ note, tags }) => {
  return (
    <Link to={`/${note.id}`} className="block">
      <div className="bg-white rounded-lg shadow p-6 group hover:bg-gray-100 transition-colors duration-200 h-full">
        <h2 className="text-2xl font-bold mb-4 text-blue-500 group-hover:text-blue-700 transition-colors duration-200">
          {note.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.id} label={tag.label} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
