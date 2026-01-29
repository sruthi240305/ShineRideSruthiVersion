import { Container, For, Stack, VStack } from '@chakra-ui/react'
import { PageHeader } from './page-header'
import { plans } from './data'
import { PricingCard } from './pricing-card'

export const Block = () => {
  return (
    <Container maxW="6xl" py={{ base: '12', md: '24' }}>
      <VStack gap="16">
        <PageHeader
          textAlign="center"
          align="center"
          headline="Pricing plans"
          description="Our pricing plans are designed to be flexible and scalable."
        />
        <Stack w="full" direction={{ base: 'column', md: 'row' }} gap="6">
          <For each={plans}>
            {(plan) => (
              <PricingCard key={plan.value} colorPalette={plan.colorPalette} data={plan} />
            )}
          </For>
        </Stack>
      </VStack>
    </Container>
  )
}
