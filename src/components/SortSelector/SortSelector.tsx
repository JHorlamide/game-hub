import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const SORT_ORDER = [
    { id: 1, value: "", label: "Relevance" },
    { id: 2, value: "-added", label: "Date added" },
    { id: 3, value: "name", label: "Name" },
    { id: 4, value: "-released", label: "Release date" },
    { id: 5, value: "-metacritic", label: "Popularity" },
    { id: 6, value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = SORT_ORDER.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {SORT_ORDER.map((item) => (
          <MenuItem onClick={() => onSelectSortOrder(item.value)} key={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
