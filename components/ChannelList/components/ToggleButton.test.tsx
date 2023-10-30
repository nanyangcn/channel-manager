/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import {
  render, screen, fireEvent, waitFor, act,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useHotelStore from 'hooks/useHotelStore';
import putHotelById from 'actions/putHotelById';
import ToggleButton from './ToggleButton';

jest.mock('actions/putHotelById');

describe('ToggleButton', () => {
  it('renders toggle should be disabled in initial state', () => {
    useHotelStore.setState({
      hotel: null,
    });
    render(
      <QueryClientProvider client={new QueryClient()}>
        <ToggleButton channelId="1" />
      </QueryClientProvider>,
    );
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass('cursor-not-allowed');
  });

  describe('when toggle button is not disabled', () => {
    beforeEach(() => {
      useHotelStore.setState({
        hotel: {
          id: '1',
          name: 'Hotel 1',
          channels: [],
        },
        isLoading: false,
      });
    });

    it('renders toggle should not be disabled when hotel store is not null', () => {
      render(
        <QueryClientProvider client={new QueryClient()}>
          <ToggleButton channelId="1" />
        </QueryClientProvider>,
      );
      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toBeInTheDocument();
      expect(toggleButton).not.toHaveClass('cursor-not-allowed');
    });

    it('toggles button should change button style', async () => {
      (putHotelById as jest.Mock).mockResolvedValue({});

      render(
        <QueryClientProvider client={new QueryClient()}>
          <ToggleButton channelId="1" />
        </QueryClientProvider>,
      );

      // From false to true
      const toggleButton = screen.getByRole('button');
      await waitFor(() => act(() => fireEvent.click(toggleButton)));

      expect(toggleButton).toHaveClass('bg-primary');

      // From true to false
      await waitFor(() => act(() => fireEvent.click(toggleButton)));

      expect(toggleButton).toHaveClass('bg-disable');
    });
  });
});
