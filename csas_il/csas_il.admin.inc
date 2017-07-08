<?php
/**
 * @file
 * Admin page callbacks for the csas_il.
 */

function csas_il_admin_config_form() {
  $form['csas_il_load_count'] = array(
    '#type' => 'textfield',
    '#title' => t('Count image on load'),
    '#default_value' => variable_get('csas_il_load_count', 15),
  );
  $form['csas_il_view_emplty_all'] = array(
    '#type' => 'checkbox',
    '#title' => t('View empty all image'),
    '#default_value' => variable_get('csas_il_view_emplty_all', FALSE),
  );
  $form['csas_il_use_visible'] = array(
    '#type' => 'checkbox',
    '#title' => t(':visible'),
    '#default_value' => variable_get('csas_il_use_visible', FALSE),
  );
  $form['csas_il_only_in_scr_are'] = array(
    '#type' => 'checkbox',
    '#title' => t('Image in screen area'),
    '#description' => t('Else all image load'),
    '#default_value' => variable_get('csas_il_only_in_scr_are', TRUE),
  );
  return system_settings_form($form);
}