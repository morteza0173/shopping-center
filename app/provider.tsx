import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";


function ReactProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
export default ReactProvider;
