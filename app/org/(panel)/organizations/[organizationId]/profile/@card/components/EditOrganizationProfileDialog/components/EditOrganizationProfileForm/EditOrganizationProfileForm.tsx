import { PlusIcon, Trash2Icon } from 'lucide-react';

import type { OrganizationResponse } from '@/api-types';
import { AddressCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import {
  BikInput,
  Button,
  CheckingAccountInput,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  InnInput,
  Input,
  KppInput,
  OgrnInput,
  PhoneNumberInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { ORGANIZATION_STAGES } from './constants/editOrganizationProfileSchema';
import { convertLocalitiesToComboboxItems } from './helpers/convertLocalitiesToComboboxItems';
import { useEditOrganizationProfileForm } from './hooks/useEditOrganizationProfileForm';

interface EditOrganizationFormProps {
  organization: OrganizationResponse;
  onEdited: () => void;
}

export const MAX_SOCIAL_LINKS_COUNT = 3;

export const EditOrganizationProfileForm = ({
  organization,
  onEdited
}: EditOrganizationFormProps) => {
  const i18n = useI18n();
  const { form, functions, state } = useEditOrganizationProfileForm({ organization, onEdited });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='relative'>
        <fieldset disabled={state.isLoading} className='relative space-y-3 px-1'>
          <FormField
            control={form.control}
            name='stage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.stage.label' />
                </FormLabel>
                <FormControl>
                  <Select {...field} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className='h-8 w-40'>
                      <SelectValue
                        placeholder={i18n.formatMessage({
                          id: 'field.organization.stage.placeholder'
                        })}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {ORGANIZATION_STAGES.map((stage) => (
                        <SelectItem value={stage}>
                          <I18nText
                            path={`organization.stage.${stage.toLowerCase()}` as LocaleMessageId}
                          />
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.stage && (
                    <I18nText path={form.formState.errors.stage.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.name.label' />
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.name && (
                    <I18nText path={form.formState.errors.name.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.contactName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.contactName.label' />
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.contactName && (
                    <I18nText
                      path={
                        form.formState.errors.information.contactName.message as LocaleMessageId
                      }
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.description.label' />
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='text-wrap'
                    {...field}
                    placeholder={i18n.formatMessage({
                      id: 'field.organization.description.label'
                    })}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.description && (
                    <I18nText path={form.formState.errors.description.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.phone'
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.phone.label' />
                </FormLabel>
                <FormControl>
                  <PhoneNumberInput onValueChange={({ value }) => onChange(value)} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.phone && (
                    <I18nText
                      path={form.formState.errors.information.phone.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.email.label' />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={i18n.formatMessage({
                      id: 'field.email.placeholder'
                    })}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.email && (
                    <I18nText
                      path={form.formState.errors.information.email.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.site'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.site.label' />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={i18n.formatMessage({
                      id: 'field.organization.site.placeholder'
                    })}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.site && (
                    <I18nText
                      path={form.formState.errors.information.site.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='locality'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.locality.label' />
                </FormLabel>
                <FormControl>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => {
                      if (newValue) form.setValue('locality', newValue);
                    }}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.locality && (
                    <I18nText path={form.formState.errors.locality.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <div className='space-y-3'>
            {form.socialField.fields.map((currentField, index) => (
              <FormField
                control={form.control}
                key={currentField.id}
                name={`information.social.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.organization.social.label' />
                    </FormLabel>
                    <FormControl>
                      <div className='flex'>
                        <Input
                          {...field}
                          placeholder={i18n.formatMessage({
                            id: 'field.organization.social.placeholder'
                          })}
                        />
                        <Button
                          type='button'
                          variant='outline'
                          size='icon'
                          className='ml-2'
                          disabled={!index}
                          onClick={() => form.socialField.remove(index)}
                        >
                          <Trash2Icon className='size-5' />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.information?.social &&
                        form.formState?.errors?.information?.social[index] && (
                          <I18nText
                            path={
                              form.formState?.errors?.information?.social[index]?.value
                                ?.message as LocaleMessageId
                            }
                          />
                        )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <Button
            type='button'
            variant='outline'
            size='icon'
            disabled={form.socialField.fields.length >= MAX_SOCIAL_LINKS_COUNT}
            onClick={() => form.socialField.append({})}
          >
            <PlusIcon className='size-5' />
          </Button>

          <Typography variant='h5' tag='h5' className='mt-5'>
            <I18nText path='organization.profile.information.title' />
          </Typography>

          <FormField
            control={form.control}
            name='information.fullNameOfTheLegalEntity'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.fullName.label' />
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.fullNameOfTheLegalEntity && (
                    <I18nText
                      path={
                        form.formState.errors.information.fullNameOfTheLegalEntity
                          .message as LocaleMessageId
                      }
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.legalAddress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.legalAddress.label' />
                </FormLabel>
                <FormControl>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => {
                      if (newValue) form.setValue('information.legalAddress', newValue);
                    }}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.legalAddress && (
                    <I18nText
                      path={
                        form.formState.errors.information.legalAddress.message as LocaleMessageId
                      }
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.postAddress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.postAddress.label' />
                </FormLabel>
                <FormControl>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => {
                      if (newValue) form.setValue('information.postAddress', newValue);
                    }}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.postAddress && (
                    <I18nText
                      path={
                        form.formState.errors.information.postAddress.message as LocaleMessageId
                      }
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='inn'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.inn.label' />
                </FormLabel>
                <FormControl>
                  <InnInput tooltip={i18n.formatMessage({ id: 'tooltip.inn' })} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.inn && (
                    <I18nText path={form.formState.errors.inn.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.kpp'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.kpp.label' />
                </FormLabel>
                <FormControl>
                  <KppInput tooltip={i18n.formatMessage({ id: 'tooltip.kpp' })} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.kpp && (
                    <I18nText
                      path={form.formState.errors.information.kpp.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='information.ogrn'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.ogrn.label' />
                </FormLabel>
                <FormControl>
                  <OgrnInput tooltip={i18n.formatMessage({ id: 'tooltip.ogrn' })} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.information?.ogrn && (
                    <I18nText
                      path={form.formState.errors.information.ogrn.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <Typography variant='h5' tag='h5' className='mt-5'>
            <I18nText path='organization.profile.requisites.title' />
          </Typography>
          <FormField
            control={form.control}
            name='requisites.bank'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.bank.label' />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={i18n.formatMessage({
                      id: 'field.organization.bank.placeholder'
                    })}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.requisites?.bank && (
                    <I18nText
                      path={form.formState.errors.requisites.bank.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='requisites.bik'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.bik.label' />
                </FormLabel>
                <FormControl>
                  <BikInput tooltip={i18n.formatMessage({ id: 'tooltip.bik' })} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.requisites?.bik && (
                    <I18nText
                      path={form.formState.errors.requisites.bik.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='requisites.checkingAccount'
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path='field.organization.checkingAccount.label' />
                </FormLabel>
                <FormControl>
                  <CheckingAccountInput onValueChange={({ value }) => onChange(value)} {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.requisites?.checkingAccount && (
                    <I18nText
                      path={
                        form.formState.errors.requisites.checkingAccount.message as LocaleMessageId
                      }
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />

          <Button className='sticky bottom-0 mt-5 w-full' type='submit' loading={state.isLoading}>
            <I18nText path='button.save' />
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
