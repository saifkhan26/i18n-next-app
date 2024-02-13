import { getDictionary } from '../../get-dictionary'
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="max-w-screen-xl mx-auto pt-8">
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
