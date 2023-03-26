import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSetSearchInput: (searchText: string) => void;
}

const SearchInput = ({ onSetSearchInput }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      const { value } = inputRef.current;
      onSetSearchInput(value);
    }
  };

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <InputGroup alignItems="center">
          <InputLeftElement
            paddingTop={"5px"}
            pointerEvents={"none"}
            children={<BsSearch color="gray.3000" />}
          />

          <Input
            ref={inputRef}
            _placeholder={{
              opacity: "0.6",
              color: "gray.500",
              fontSize: "15px",
            }}
            placeholder="Search games"
            height="45px"
            bg={"gray.700"}
            border="none"
            focusBorderColor="none"
            borderRadius={"20px"}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
