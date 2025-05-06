import Button from "~/components/button/button";

export function Tasks() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button 
        title="ADD TASK"
        colorTheme="green"
        textColor="white"
        onClick={() => alert("Button clicked!")}
        loading={false}
      />
    </div>
  );
}