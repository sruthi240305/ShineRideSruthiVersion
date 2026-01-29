import {
  Badge,
  Button,
  Flex,
  For,
  HStack,
  List,
  Span,
  Stack,
  type StackProps,
} from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'
import type { PlanData } from './data'

interface PricingCardProps extends StackProps {
  data: PlanData
}

export const PricingCard = (props: PricingCardProps) => {
  const { data, ...rest } = props
  return (
    <Stack
      p="8"
      borderWidth="1px"
      gap="7"
      bg="bg.panel"
      pos="relative"
      flex="1"
      rounded="l3"
      align={{ base: 'center', md: 'stretch' }}
      {...rest}
    >
      <HStack fontWeight="medium" color="colorPalette.fg" justify="space-between">
        {data.title} {data.recommended && <Badge variant="solid">Recommended</Badge>}
      </HStack>
      <Flex gap="1">
        <Span textAlign="xs" textTransform="uppercase" alignSelf="flex-start" fontWeight="medium">
          {data.priceCurrency}
        </Span>
        <Span textStyle="5xl" lineHeight="1" fontWeight="semibold">
          {data.priceSymbol}
          {data.price}
        </Span>
        <Span textStyle="sm" color="fg.muted" alignSelf="center" ms="1">
          per {data.priceUnit}
        </Span>
      </Flex>
      <List.Root variant="plain" align="center" textStyle="sm" gap="3">
        <For each={data.features}>
          {(item) => (
            <List.Item alignItems="center" key={item}>
              <List.Indicator asChild color="colorPalette.fg">
                <LuCheck />
              </List.Indicator>
              {item}
            </List.Item>
          )}
        </For>
      </List.Root>
      <Button colorPalette={!data.recommended ? 'gray' : undefined}>Get Started</Button>
    </Stack>
  )
}
