import Button from "~/components/button/button";

export function Tasks() {
  return (
    <div>
      <Button 
        title="Click Me"
        colorTheme="green"
        textColor="white"
        onClick={() => alert("Button clicked!")}
        loading={false}
      />
    </div>
  );
}