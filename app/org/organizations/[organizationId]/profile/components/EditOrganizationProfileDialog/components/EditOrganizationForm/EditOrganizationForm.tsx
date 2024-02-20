import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useEditOrganizationForm } from './hooks/useEditOrganizationForm';

interface EditOrganizationFormProps {
  organization: OrganizationResponse;
}

export const EditOrganizationForm = ({ organization }: EditOrganizationFormProps) => {
  const intl = useI18n();
  const { form, functions, state } = useEditOrganizationForm({ organization });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className=''>
        <Typography variant='h5' tag='h5'>
          <I18nText path='organization.profile.information.title' />
        </Typography>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.organization.name.label' />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.information?.contactName && (
                  <I18nText
                    path={form.formState.errors.information.contactName.message as LocaleMessageId}
                  />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='information.phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.organization.phone.label' />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
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
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
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
        {/* // ? TODO */}
        <FormField
          control={form.control}
          name='information.social'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.organization.social.label' />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.information?.social && (
                  <I18nText
                    path={form.formState.errors.information.social.message as LocaleMessageId}
                  />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        {/* // ? TODO */}
        <Typography variant='h5' tag='h5' className='mt-5'>
          <I18nText path='organization.profile.legalInfo.title' />
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.information?.legalAddress && (
                  <I18nText
                    path={form.formState.errors.information.legalAddress.message as LocaleMessageId}
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.information?.postAddress && (
                  <I18nText
                    path={form.formState.errors.information.postAddress.message as LocaleMessageId}
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
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
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.organization.checkingAccount.label' />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={intl.formatMessage({
                    id: 'field.default.placeholder'
                  })}
                />
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
        <Button className='sticky bottom-0 w-full' type='submit' loading={state.isLoading}>
          <I18nText path='button.save' />
        </Button>
      </form>
    </Form>
  );
};
