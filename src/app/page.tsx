import { EditorContainer } from "@/components/common/editor/container";
import { Logo } from "@/components/common/editor/logo";
import { Modifier } from "@/components/common/editor/modifier";

export default function HomePage() {
  return (
    <main>
      <EditorContainer>
        <div className="flex h-full">
          <Modifier />
          <Logo />
        </div>
      </EditorContainer>
    </main>
  );
}
