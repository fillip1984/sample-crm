import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreateRequest, Person } from "@/integrations/openapi";
import {
  Configuration,
  DefaultConfig,
  PersonControllerApi,
} from "@/integrations/openapi";

export const Route = createFileRoute("/demo/tanstack-query")({
  component: TanStackQueryDemo,
});

const adminConfig = new Configuration({
  basePath: "http://localhost:8080",
  headers: { Authorization: "Basic YWRtaW46YWRtaW4=" },
});

function TanStackQueryDemo() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () => new PersonControllerApi(adminConfig).read(),
    initialData: [],
  });
  const { mutate } = useMutation({
    mutationKey: ["people"],
    mutationFn: (person: Person) => {
      return new PersonControllerApi(adminConfig).create({ person });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
  const { mutate: deletePerson } = useMutation({
    mutationKey: ["people"],
    mutationFn: (person: Person) => {
      if (!person.id) new Error("Person ID is required");
      return new PersonControllerApi(adminConfig).deletePerson({
        id: person.id!,
      });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });

  return (
    <div className="p-4">
      <div className="flex items-center mb-4 gap-4">
        <h1 className="text-2xl ">People list</h1>
        <button
          onClick={() => {
            mutate({
              firstName: "Jeff",
              lastName: "Doe",
            });
          }}
          className="px-4 py-2 bg-amber-600 rounded text-white">
          Add Person
        </button>
      </div>
      <ul className="flex-col gap-2 flex">
        {data.map((person) => (
          <li
            key={person.id}
            className="flex max-w-1/4 bg-emerald-200/60 p-2 rounded ">
            <span>
              {person.firstName} {person.lastName}
            </span>
            <button
              onClick={() => deletePerson(person)}
              className="ml-auto text-red-600">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
